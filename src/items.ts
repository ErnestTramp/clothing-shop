interface Item {
  img: string;
  price?: number;
}

const items: Item[] = [
  {
    img: "https://i.pinimg.com/236x/04/ac/96/04ac96260ca6f16358e01945a9c0871a.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/a9/97/71/a997710ef8f327b3df3cfa912cb2210f.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/9d/ef/04/9def04253eed5b0c4f87e4ed24bbb53f.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/5f/30/7c/5f307ca3ca406c2bbd43383751db83dd.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/45/5e/b8/455eb83fbf50949bc0646f78bf6beffd.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/89/8e/99/898e99f663d21ba95de711262f1685e9.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/0e/cb/f3/0ecbf3cd12ac054c00a77af095f1fb02.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/c0/2c/2c/c02c2c1406260099ef07e15a33ed75fb.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/e8/2d/91/e82d9167c055c6b9091a3878ef4185ee.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/f0/fd/e6/f0fde6293328cc58bd502fa17f86c435.jpg",
  },
  {
    img: "https://i.pinimg.com/474x/e5/bd/16/e5bd163aefaa6a00d9809e7a3342bf80.jpg",
  },
  {
    img: "https://i.pinimg.com/474x/0e/86/f7/0e86f7522d854dbd18174184e1541d12.jpg",
  },
  {
    img: "https://i.pinimg.com/474x/90/41/f9/9041f9e78417e95004b597c7a6497110.jpg",
  },
  {
    img: "https://i.pinimg.com/736x/05/c8/5b/05c85bc59ed795a4af8ff8c243c4ac2b.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/37/23/f8/3723f8000a223100e7b6728948b767a0.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/4c/40/51/4c40516876a274a7ea834dad7dff36c5.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/37/23/f8/3723f8000a223100e7b6728948b767a0.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/4c/40/51/4c40516876a274a7ea834dad7dff36c5.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/37/23/f8/3723f8000a223100e7b6728948b767a0.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/4c/40/51/4c40516876a274a7ea834dad7dff36c5.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/37/23/f8/3723f8000a223100e7b6728948b767a0.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/4c/40/51/4c40516876a274a7ea834dad7dff36c5.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/37/23/f8/3723f8000a223100e7b6728948b767a0.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/4c/40/51/4c40516876a274a7ea834dad7dff36c5.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/7f/93/71/7f93711159e75a596a885ba8f1a40a57.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/1a/13/a5/1a13a50c901ca0abacceb55b486baf42.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/9f/c7/ea/9fc7ea433d2175373ae6c302237c8558.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/4c/40/51/4c40516876a274a7ea834dad7dff36c5.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/7f/93/71/7f93711159e75a596a885ba8f1a40a57.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/1a/13/a5/1a13a50c901ca0abacceb55b486baf42.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/9f/c7/ea/9fc7ea433d2175373ae6c302237c8558.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/4c/40/51/4c40516876a274a7ea834dad7dff36c5.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/7f/93/71/7f93711159e75a596a885ba8f1a40a57.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/1a/13/a5/1a13a50c901ca0abacceb55b486baf42.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/9f/c7/ea/9fc7ea433d2175373ae6c302237c8558.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/4c/40/51/4c40516876a274a7ea834dad7dff36c5.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/7f/93/71/7f93711159e75a596a885ba8f1a40a57.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/1a/13/a5/1a13a50c901ca0abacceb55b486baf42.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/9f/c7/ea/9fc7ea433d2175373ae6c302237c8558.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/2f/b2/5c/2fb25c8b9294341b60707bf2d4a8acaf.jpg",
  },
  {
    img: "https://i.pinimg.com/236x/cd/f7/eb/cdf7ebbeb55863a043e72ad72e9f283a.jpg",
  },
];

for (let i = items.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [items[i], items[j]] = [items[j], items[i]];
}

for (let i = 0; i < items.length; i++) {
  items[i].price = Math.floor(Math.random() * 120) + 1;
}

export default items;
