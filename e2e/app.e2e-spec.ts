import { FrontendGestorTareasPage } from './app.po';

describe('frontend-gestor-tareas App', () => {
  let page: FrontendGestorTareasPage;

  beforeEach(() => {
    page = new FrontendGestorTareasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
