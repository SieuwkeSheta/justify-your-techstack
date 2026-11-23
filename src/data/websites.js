export async function getWebsites() {
  const response = await fetch("https://fdnd-agency.directus.app/items/toolgankelijk_website?sort=title", {
      headers: {
        Authorization: `Bearer ${process.env.DIRECTUS_STATIC_TOKEN}`,
      },
    }
  )

  const data = await response.json()
  
  return data.data
}