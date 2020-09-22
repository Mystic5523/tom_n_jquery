import { AppPage } from './app.po';

describe('techtalk-site App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Kansas City Women in Technology');
  });
});
