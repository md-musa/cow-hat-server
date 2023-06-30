import dotenv from 'dotenv'
import path from 'path'

const nodeEnv: string =
  process.env.NODE_ENV === 'development' ? 'development' : 'production'

dotenv.config({ path: path.join(process.cwd(), `.env.${nodeEnv}`) })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
}
