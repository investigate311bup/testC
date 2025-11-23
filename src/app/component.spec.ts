import { AppComponent } from './component';

describe('AppComponent', () => {
  it('should create instance', () => {
    const c = new AppComponent();
    expect(c).toBeInstanceOf(AppComponent);
  });

  it('should have title', () => {
    const c = new AppComponent();
    expect(c.title).toBe('app works');
  });
});
