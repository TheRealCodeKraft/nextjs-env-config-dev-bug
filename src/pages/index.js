export default function PageIndex() {
  const test = process.env.TEST

  if (test) {
    return (
      <div style={{ fontFamily: 'sans-serif' }}>It is working. Here's the env variable content: {test}</div>
    )
  }

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      It isn't working. Here's the env variables content not showing: {test}
    </div>
  )
}
