import { MintaprojektPage } from './app.po';

describe('mintaprojekt App', function() {
  let page: MintaprojektPage;

  beforeEach(() => {
    page = new MintaprojektPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
