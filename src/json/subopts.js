let url = "https://raw.githubusercontent.com/smc181002/media_files/master/icons/";

let subopts = {
  docker: {
    cards: [
      {
        title: "Create Container",
        image: `${url}docker/docker-icon.svg`,
        altImg: "Docker",
        backText: "Create Contin",
        toPath: "/docker/container",
      },
      {
        title: "Create Volume",
        image: `${url}docker/docker-icon.svg`,
        altImg: "Docker",
        backText: "Create Volume",
        toPath: "/docker/volume",
      },
      {
        title: "Create Network",
        image: `${url}docker/docker-icon.svg`,
        altImg: "Docker",
        backText: "Create Network",
        toPath: "/docker/network",
      },
      {
        title: "Pull Image",
        image: `${url}docker/docker-icon.svg`,
        altImg: "Docker",
        backText: "Pull Image",
        toPath: "/docker/imagepull",
      },
      {
        title: "Resource Status",
        image: `${url}docker/docker-icon.svg`,
        altImg: "Docker",
        backText: "Resource s",
        toPath: "/docker/resourcestat",
      },
    ],
    pageOut: {
      isMainPage: false,
      head: "Docker Operations",
    }
  }
}

export default subopts;