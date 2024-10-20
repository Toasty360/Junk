import axios from "axios";

const videosrc = async (id) => {
  var url =
    "https://tmstr2.luminousstreamhaven.com/stream_new/H4sIAAAAAAAAAw3O226DIAAA0F9CbBvZ20y8lApGEBDeFO3aisYl1qJfv50vOJcQwUsYtYEFXTDcBxT1J3hHETzZrota8MWBU3qO92o2SSnSrJqI11PkKfSbeI1bN7uqTLHSwPky8.cb9EY90UMcsRledhPN92EamqsUH0X441uFHhX0koT9L0mTXWTEk5rlIkh17yitwQJtwj5s1PsgWaFFT6U0uc0Q6ZyZ7SyfpukznrmrbAyjDY15JiVXH6_DERKQns0YzEwsplTYFPva1mF84mOwqAQf9CULOpGtqpnQrn.rMfn_yfeQsFIDFFOxXq2UmE14tgqvlas.NmdXkeCGwVUwt8R88ryrHTMHQH8.qAPiQQEAAA--/master.m3u8";

  const response = (
    await axios.get(url, {
      headers: {
        Referer: "https://ate60vs7zcjhsjo5qgv8.com/",
      },
    })
  ).data;
  console.log(response);
};

videosrc();
