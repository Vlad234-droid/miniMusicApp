import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Hidden Structure",
      artist: "Leavv, Flitz&Suppe",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#C68F63", "#BA8A66"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
    },
    {
      name: "Maple Leaf Pt.2",
      artist: "Philanthrope",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#A46F54", "#F9F9F9"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10263",
    },
    {
      name: "Sodium",
      artist: "Philanthrope, Tesk",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#194548", "#55B3F7"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9149",
    },

    {
      name: "Slim Bobby",
      artist: "Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#8D82C2", "#33255B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10448",
    },

    {
      name: "Flushing the Stairs",
      artist: "Leavv",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#36635D", "#0C3240"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9917",
    },

    {
      name: "Sleepover",
      artist: "Nymano, JK the Sage",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#1A1615", "#595381"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
    },

    {
      name: "Fuzz",
      artist: "Miscél",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/edaf1202cf33c7a2a122b7494a7e4d3e643af45f-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#A54B60", "#A94369"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8147",
    },

    {
      name: "Leaving For Good",
      artist: "Hanz",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/7a84488fd87082302cb69c05262f2f3f87e93018-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#386565", "#A0BEB3"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8264",
    },
  ];
}

export default chillHop;
