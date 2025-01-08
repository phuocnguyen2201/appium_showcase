// Description: This file contains the locators for the elements in the app.
const locators = {
    allowButton: '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]',
    searchButton: '//android.view.ViewGroup[@content-desc="Search YouTube"]',
    searchInput: '//android.widget.EditText[@text="Search YouTube"]',
    rejectButton: '//android.widget.Button[@text="Reject all"]'
}

module.exports = {locators};