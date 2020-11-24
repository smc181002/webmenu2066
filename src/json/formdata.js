const docker = {
  container: {
    store: {
      imgname: "centos",
      imgv: "latest",
      contname: "",
      volname: "",
      volpath: "",
      netname: "bridge",
    },
    formData: [
			{name: 'imgname', title: "Image Name"},
			{name: 'imgv', title: "Image Version"},
			{name: 'contname', title: "Container Name"},
			{name: 'volname', title: "Volume Name"},
			{name: 'volpath', title: "Mount Path"},
			{name: 'netname', title: "Network Name"},
		]
  }
}

export const formvals = {
  docker: docker
}