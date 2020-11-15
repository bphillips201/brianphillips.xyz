import { navigate } from 'gatsby'

export default function NotFoundPage() {
  navigate('/', { replace: true })
  return null
}
