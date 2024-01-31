import sys, json, re
import gettext
from typing import Any
from urllib.error import URLError
import urllib.request

_ = gettext.gettext
from http.client import IncompleteRead


def Stderr(string: str):
    """打印到标准错误"""
    print(string, file=sys.stderr)


def GetUrl(url: str) -> str:
    if not url.startswith("http"):
        raise ValueError(_('"url" 必须是 http(s)'))
    with urllib.request.urlopen(url) as r:
        return r.read().decode("utf-8")


def MakeSureStr(string: Any) -> str:
    """确保输入的是字符串"""
    if isinstance(string, str):
        return str(string)
    raise TypeError(_("不是字符串"))


def GetMedia(videoId: str, instanceDomain: str) -> tuple[str, str]:
    url = f"https://{instanceDomain}/api/v1/videos/{videoId}"
    Stderr(_("获取 {}").format(url))
    data = json.loads(GetUrl(url))
    videos = []
    audios = []
    for i in data.get("adaptiveFormats"):
        if re.match("video", i.get("type")) != None:
            videos.append(i)
        if re.match("audio", i.get("type")) != None:
            audios.append(i)
    videos.sort(key=lambda x: int(x.get("bitrate")), reverse=True)
    audios.sort(key=lambda x: int(x.get("bitrate")), reverse=True)
    video = MakeSureStr(videos[0]["url"])
    audio = MakeSureStr(audios[0]["url"])
    if not video.startswith("http"):
        raise ValueError(_("没有 Video"))
    if not audio.startswith("http"):
        raise ValueError(_("没有 Audio"))
    return video, audio


def a(video_id):
    video = audio = ""
    instances = json.loads(GetUrl("https://api.invidious.io/instances.json"))
    for instance in instances:
        try:
            if not instance[1]["api"]:
                continue
        except IndexError:
            pass
        domain = instance[0]

        try:
            video, audio = GetMedia(video_id, domain)
        except (json.JSONDecodeError, URLError, IncompleteRead, ValueError):
            continue
    return video, audio
