import {test,expect} from '@playwright/test'
test.only("api GET request",async ({request}) => {
    
    const response=await request.get("https://reqres.in/api/users?page=2")
    expect(response.status()).toBe(200)
    const text=await response.text()
    expect(text).toContain('Michael')
    console.log(await response.json())
})
test("api POST request",async ({request}) => {
    const response=await request.post("https://reqres.in/api/users",{
        data:{
            name:"morpheus",
            job:"leader"
        }
    })
    expect(response.status()).toBe(201)
    const text=await response.text()
    expect(text).toContain('morpheus')
    console.log(await response.json())
})
