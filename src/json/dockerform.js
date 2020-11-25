export const docker = {
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
  },

  network: {
    store: {
      netname: "",
      nettype: "bridge"
    },
    formData: [
			{name: 'netname', title: "Network Name"},
			{name: 'nettype', title: "Network Type"},
		]
  },

  volume: {
    store: {
      volname: "",
    },
    formData: [
			{name: 'volname', title: "Volume Name"},
		]
  },

  imagepull: {
    store: {
      imgname: "centos",
      imgv: "latest",
    },
    formData: [
			{name: 'imgname', title: "Image Name"},
			{name: 'imgv', title: "Image Version"},
		]
  },

  resourcestat: {
    store: {
      restype: "container"
    },
    formData: [
			{name: 'restype', title: "Resource type(container/image)"},
		]
  },
}