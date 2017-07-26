import { RosaLeonPage } from './app.po';

describe('rosa-leon App', () => {
  let page: RosaLeonPage;

  beforeEach(() => {
    page = new RosaLeonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
