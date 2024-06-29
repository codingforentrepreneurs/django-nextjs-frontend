export const DJANGO_PORT=process.env.DJANGO_PORT ? process.env.DJANGO_PORT : "8000"
export const DJANGO_BASE_URL=process.env.DJANGO_BASE_URL ? process.env.DJANGO_BASE_URL : `http://127.0.0.1:${DJANGO_PORT}`
export const DJANGO_API_ENDPOINT=`${DJANGO_BASE_URL}/api`