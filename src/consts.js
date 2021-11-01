export async function fetchConfigs() {
  try {
    const configs = {
      API_KEY: process.env.REACT_APP_API_KEY,
      GIPHY_URL: process.env.REACT_APP_API_KEY,
    };
    return configs;
  } catch (e) {
    console.error('Error fetching configs', e);
    window.alert('Error fetching configs. Is server up?');
  }
}
