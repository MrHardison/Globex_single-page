export default ({ $axios }) => {
  $axios.onRequest(config => {
    config.baseURL = window.location.href
  })

  $axios.setHeader('Applicationtype', 'web')
  $axios.setHeader('Applicationversion', 'Browser v3.2')
}
