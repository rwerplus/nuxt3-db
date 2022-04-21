export default function ({ $auth, redirect }) {
  $auth.onRequest((config) => {
    console.log('Making request to ' + config.url)
    console.log('config: ', config)
    return config
  })
  $auth.onError((error, name, endpoint) => {
    console.error('bug.......',name, error)
  })
}
