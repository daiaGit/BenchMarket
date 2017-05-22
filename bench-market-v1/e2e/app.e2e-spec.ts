import { BenchMarketV1Page } from './app.po';

describe('bench-market-v1 App', () => {
  let page: BenchMarketV1Page;

  beforeEach(() => {
    page = new BenchMarketV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
