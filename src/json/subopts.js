let subopts = {
  docker: {
    cards: [
      {
        title: "Create Container",
        image: `${url}docker/docker-icon.svg`,
        altImg: "Docker",
        backText: "Create Container",
        toPath: "/docker/container",
      },
      {
        title: "Create Volume",
        image: `${url}docker/docker-icon.svg`,
        altImg: "Docker",
        backText: "Create Volume",
        toPath: "/docker/volume",
      },
    ],
    pageOpt: {
      isMainPage: false,
      head: "Docker Operations",
    }
  }
}

export default subopts;