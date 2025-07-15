import { test, expect, request } from '@playwright/test'
test.only("api Post request", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
        headers: {
      'Content-Type': 'application/json' // ✅ Important for proper request body
    },
        data: {
            "name": "morpheus",
            "job": "leader"
        },
    })
    expect(response.status()).toBe(201)
    const text=await response.text()
    expect(text).toContain('morpheus')
    console.log(await response.json())
})