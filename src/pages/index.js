export default function PageIndex() {
  const test = process.env.TEST
	const test2 = process.env.TEST2

  if (test) {
    return (
      <div style={{ fontFamily: 'sans-serif' }}>It is working. Here's the env variable content: {test}</div>
    )
  }

  if (test2) {
    return (
      <div style={{ fontFamily: 'sans-serif' }}>It is working with NEXT_PUBLIC. Here's the env variable content: {test2}</div>
    )
  }

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      It isn't working. Here's the env variables content not showing: {test}
    </div>
  )
}
