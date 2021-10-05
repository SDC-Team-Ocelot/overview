import http from 'k6/http';
import { sleep, check } from 'k6';

const max = 1000011;
const min = 900000;
const rnd = Math.floor(Math.random() * (max - min + 1)) + min;

export default function () {
  let res = http.get(`http://localhost:3001/api/products/${rnd}`);
  check(res, { 'status was 200': (r) => r.status == 200 });
  // sleep(1);
}