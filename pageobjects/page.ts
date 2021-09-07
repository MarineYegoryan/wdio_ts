export default class Page {
    public open (path: string): string {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
