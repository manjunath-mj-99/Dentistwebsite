import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { clinical: { 50:'#F2FBFA',100:'#DDF4F1',200:'#BCE9E3',400:'#2EC4B6',500:'#159f96',700:'#0B3C49',900:'#082b35' }, ink:'#0A1F26' }, fontFamily: { sans:['var(--font-inter)'], heading:['var(--font-sora)'] }, borderRadius:{'4xl':'2rem'}, boxShadow:{ soft:'0 20px 60px rgba(11,60,73,.10)' } } }, plugins: [require('@tailwindcss/typography')] };
export default config;
