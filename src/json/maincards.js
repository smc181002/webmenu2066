let url = "https://raw.githubusercontent.com/smc181002/media_files/master/icons/"

let cards = [
  {
    title: "Docker Operations",
    image: `${url}docker/docker-icon.svg`,
    altImg: "Docker",
    backText: "Containers",
    toPath: "/ping",
  },
  {
    title: "AWS Operations",
    image: `${url}aws.svg`,
    altImg: "AWS",
    backText: "Cloud Comp",
    toPath: "/ping",
  },
  {
    title: "Hadoop Operations",
    image: `${url}hadoop/logos_hadoop.svg`,
    altImg: "Hadoop",
    backText: "Map Reduce",
    toPath: "/ping",
  },
  {
    title: "LVM partitions",
    image: `${url}lvm.svg`,
    altImg: "partitions",
    backText: "Partitions",
    toPath: "/ping",
  },
  {
    title: "YUM repo config",
    image: `${url}yum.svg`,
    altImg: "redhat",
    backText: "Repository",
    toPath: "/ping",
  },
  {
    title: "Apache Httpd server",
    image: `${url}apache_httpd.svg`,
    altImg: "apache",
    backText: "Web Server",
    toPath: "/ping",
  },
];

export default cards;