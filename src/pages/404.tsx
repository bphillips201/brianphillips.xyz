import { navigate } from 'gatsby'

export default function NotFoundPage() {
  if (typeof window !== 'undefined') {
    navigate('/', { replace: true })
  }
  return null
}
