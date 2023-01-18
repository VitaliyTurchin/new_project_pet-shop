describe('new login test', () => {
    it('login', async () =>{
       await browser.url('https://petstore.octoperf.com/actions/Account.action?newAccountForm=')
       await $('input[name="username"]').setValue('first_name');
       await $('input[name="password"]').setValue('test12345');
       await $('input[name="repeatedPassword"]').setValue('test12345');
       await $('input[name="account.firstName"]').setValue('the_first_name');
       await $('input[name="account.lastName"]').setValue('the_last_name');
       await $('input[name="account.email"]').setValue('test@test.com');
       await $('input[name="account.phone"]').setValue('+380444444444');
       await $('input[name="account.address1"]').setValue('my_home');
       await $('input[name="account.city"]').setValue('Kamianske');
       await $('select[name="account.languagePreference"]').selectByAttribute('value', 'japanese');
       await $('select[name="account.favouriteCategoryId"]').selectByAttribute('value', 'DOGS');
       await $('input[name="account.listOption"]').click();
       await $('input[name="account.bannerOption"]').click();
       await $('input[name="newAccount"]'). click()
    })
})