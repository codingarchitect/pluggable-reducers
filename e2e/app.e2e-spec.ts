import { PluggableReducersPage } from './app.po';

describe('pluggable-reducers App', () => {
  let page: PluggableReducersPage;

  beforeEach(() => {
    page = new PluggableReducersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
