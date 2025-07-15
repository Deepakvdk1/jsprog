import { test, expect, request } from '@playwright/test'
test("api put test ", async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/2", {
         headers: {
      'Content-Type': 'application/json' // ✅ Important for proper request body
    },
       data:{
            "name": "morpheus",
            "job": "zion resident"
        }
    })
    expect(response.status()).toBe(200)
    const resJson =await response.json()
    expect(await resJson.name()).toContain("morpheus")
    
    console.log(resJson)
    
})