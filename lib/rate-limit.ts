type Entry={count:number;reset:number};const buckets=new Map<string,Entry>();
export function limited(key:string,limit=5,windowMs=60_000){const now=Date.now();buckets.forEach((entry,bucketKey)=>{if(entry.reset<=now)buckets.delete(bucketKey)});const item=buckets.get(key);if(!item||item.reset<=now){buckets.set(key,{count:1,reset:now+windowMs});return false}item.count++;return item.count>limit}
export function clientKey(request:Request){return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown'}
