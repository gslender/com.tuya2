export type TuyaQrCodeResponse = {
  success: boolean;
  tid: string;
  t: number;
  msg?: string;
  code?: string;
  result?: { qrcode: string };
};

export type TuyaHasHome = {
  background: string;
  geoName: string;
  gmtCreate: number;
  gmtModified: number;
  groupId: number;
  id: number;
  lat: number;
  lon: number;
  name: string;
  ownerId: string;
  status: boolean;
  uid: string;
};
