// general
export const IS_PRODUCTION = false // toggle this to switch between production/development mode
export const SITE_URL = 'https://bierleehenk.wixsite.com/henk-bierlee' // your site URL

// Don't have to touch this one
// there is dev mode if you change this to _dev-functions, but note that wix-data then writes to the sandbox/test database!
export const SITE_API_URL = `${SITE_URL}/_functions`

// database
/*
  When creating the database collection to hold your subscribers, use Collection type: 'Custom use' and set the role permissions as follows:
    - Who can read content from this collection? Site member author
    - Who can create content for this collection? Site member
    - Who can update content from this collection? Site member author  // TODO maybe this one should be admin as well
    - Who can delete content from this collection? Admin
 */
export const SUBSCRIBERS_COLLECTION_NAME = 'Subscribers' // the name of database collection that stores your subscribers; If you change this, change the function names of the hooks in Backend/data.js as well!

// Mollie API keys (!!! KEEP THESE SECRET, IF YOU MAKE YOUR CODE PUBLIC, REMOVE THESE KEYS !!!)
const MOLLIE_TEST_API_KEY = 'test_xxxx'
const MOLLIE_LIVE_API_KEY = 'live_yyyy'
export const MOLLIE_API_KEY = IS_PRODUCTION ? MOLLIE_LIVE_API_KEY : MOLLIE_TEST_API_KEY

// payment/subscription settings
export const CURRENCY = 'EUR'
export const FIRST_PAYMENT_AMOUNT = '0.01' // It is the activation cost of your subscription (which you might want to keep at the negligible price of 0.01). Has to be more than '0.00'.
export const SUBSCRIPTION_AMOUNT = '12.95' // subscription cost per interval // TODO [mollie] auto-subtract mollie transaction fee here? Or instruct the user how to do this?
export const SUBSCRIPTION_INTERVAL = '1 month' // (`… months`, `… weeks`, `… days`) Interval to wait between charges like 1 month(s) or 14 days.
export const FIRST_PAYMENT_DESCRIPTION = 'Activate your subscription'
export const SUBSCRIPTION_DESCRIPTION = 'Your monthly subscription fee of €12.95'

// page URLs
export const PREMIUM_PAGE_ROUTER_PREFIX = 'premium' // the premium router prefix; if you change 'premium' to some other URL prefix, change the function names of `premium_Router` and `premium_SiteMap` accordingly!
export const PREMIUM_PAGE_KEY = 'premium-page' // the key of the page that will be shown if subscription is successful. In Wix, this key should match the name of the page in the premium router pages
export const PREMIUM_PAGE_TITLE = 'Premium Content' // the sitemap display name of the premium content page

const SUBSCRIBE_PAGE_URL_NAME = 'subscribe' // the URL of the page where users can subscribe
export const SUBSCRIBE_PAGE_URL = `${SITE_URL}/${SUBSCRIBE_PAGE_URL_NAME}`
