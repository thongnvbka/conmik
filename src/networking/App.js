import NetInfo from '@react-native-community/netinfo';

const isTest = true;

export const domain = isTest
  ? 'http://118.70.180.81:4000/'
  : 'http://conmik.com/'; //192.168.0.126
export const apiUrl = domain + 'api_m/';
export const aboutUrl = 'http://conmik.com/tong-quan-cong-ty/';
// Noti
export const AppIdOneSignal = 'ebbf0745-10a1-4684-b89e-ac8e7335d838';

async function request(
  api,
  method = isTest ? 'GET' : 'POST',
  header = {'Content-Type': 'application/json'},
  body = '{}',
  type = 'json',
) {
  const networking = await NetInfo.fetch();
  if (!networking.isConnected) {
    return {
      status: 0,
      smg: 'Không có kết nối mạng',
    };
  }
  try {
    let response;
    if (method == 'GET') {
      response = await fetch(api, {headers: new Headers(header), method});
    } else {
      response = await fetch(api, {headers: new Headers(header), method, body});
    }
    const responseJson =
      type == 'json' ? await response.json() : await response.text();
    console.log(api, method, header, body, responseJson);
    return responseJson;
  } catch (error) {
    return {
      status: 0,
      error,
    };
  }
}

/************************************* LOGIN *******************************************/

export async function login(params) {
  const api = apiUrl + 'dangnhap' + (isTest ? '.json' : '') + params;
  return await request(api, undefined, undefined);
}

export async function signup(params) {
  const api = apiUrl + 'dangky' + (isTest ? '.json' : '') + params;
  return await request(api, undefined, undefined);
}

export async function forgot(params) {
  const api = apiUrl + 'matkhau' + (isTest ? '.json' : '') + params;
  return await request(api, undefined, undefined);
}

export async function loginSocial(params) {
  const api = apiUrl + 'dangkysocial' + (isTest ? '.json' : '') + params;
  return await request(api, undefined, undefined);
}

export async function checkToken(params) {
  const api = apiUrl + 'kiemtratoken' + (isTest ? '.json' : '') + params;
  return await request(api, undefined, undefined);
}

export async function changePassword(params) {
  const api = apiUrl + 'doimatkhau' + (isTest ? '.json' : '') + params;
  return await request(api, undefined, undefined);
}

/************************************* PROFILE *******************************************/

export async function getProfile(params) {
  const api = apiUrl + 'khachhang' + (isTest ? '.json' : '') + params; //tk=xxx.xxx&token=
  return await request(api, 'GET', undefined);
}

export async function updateProfile(params) {
  const api = apiUrl + (isTest ? 'avatarkhachhang.json' : 'khachhang') + params; //tk=xxx.xxx&token=&name=&birthday=&address=&email=
  return await request(api, isTest ? 'GET' : 'PUT', undefined);
}

export async function updateAvatar(data) {
  const api = apiUrl + 'avatarkhachhang' + (isTest ? '.json' : '');
  return await request(
    api,
    isTest ? 'GET' : 'PUT',
    {'Content-Type': 'multipart/form-data'},
    data,
  );
}

export async function updateCover(data) {
  const api = apiUrl + 'coverkhachhang' + (isTest ? '.json' : '');
  return await request(
    api,
    isTest ? 'GET' : 'PUT',
    {'Content-Type': 'multipart/form-data'},
    data,
  );
}

/************************************* App *******************************************/

export async function getHome(params) {
  const api = apiUrl + 'trangchu' + (isTest ? '.json' : '') + params; //?tk=..&token=..
  return await request(api, 'GET', undefined);
}

export async function getCates(params) {
  const api = apiUrl + 'danhmucsanpham' + (isTest ? '.json' : '') + params; //?tk=..&token=..&last=...
  return await request(api, 'GET', undefined);
}

export async function getProducts(params) {
  const api = apiUrl + 'sanpham' + (isTest ? '.json' : '') + params; //?tk=..&token=..&last=...
  return await request(api, 'GET', undefined);
}

export async function getServices(params) {
  const api = apiUrl + 'dichvu' + (isTest ? '.json' : '') + params; //?tk=..&token=..&last=...
  return await request(api, 'GET', undefined);
}

export async function getKeywords(params) {
  const api = apiUrl + 'tukhoa' + (isTest ? '.json' : '') + params; //?tk=xxx.xxx&token=...&last=...
  return await request(api, 'GET', undefined);
}

export async function getSearchPopular(params) {
  const api = apiUrl + 'timkiemphobien' + (isTest ? '.json' : '') + params; //?tk=xxx.xxx&token=...&last=...
  return await request(api, 'GET', undefined);
}

export async function searchKeywords(params) {
  const api = apiUrl + 'timkiem' + (isTest ? '.json' : '') + params; //?tk=xxx.xxx&token=...&kw=&last=...
  return await request(api, 'GET', undefined);
}

export async function getNews(params) {
  const api = apiUrl + 'tintuc' + (isTest ? '.json' : '') + params; //?tk=xxx.xxx&token=...&last=...
  return await request(api, 'GET', undefined);
}

export async function getContact(params) {
  const api = apiUrl + 'lienhe' + (isTest ? '.json' : '') + params; //?tk=xxx.xxx&token=...
  return await request(api, 'GET', undefined);
}

export async function getDetail(params) {
  const api = apiUrl + 'chitietbaiviet' + (isTest ? '.json' : '') + params; //?tk=xxx.xxx&token=...&id=..
  return await request(api, 'GET', undefined);
}

export async function getSales(params) {
  const api = apiUrl + 'khuyenmai' + (isTest ? '.json' : '') + params; //?tk=xxx.xxx&token=...
  return await request(api, 'GET', undefined);
}

export async function getNoti(params) {
  const api = apiUrl + 'thongbao' + (isTest ? '.json' : '') + params; //?tk=xxx.xxx&token=...&type=...
  return await request(api, 'GET', undefined);
}
