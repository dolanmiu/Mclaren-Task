import { MclarenTaskPage } from './app.po';

describe('mclaren-task App', () => {
  let page: MclarenTaskPage;

  beforeEach(() => {
    page = new MclarenTaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
