import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCustomPageWithIdPage } from './my-custom-page-with-id.page';

describe('MyCustomPageWithIdPage', () => {
  let component: MyCustomPageWithIdPage;
  let fixture: ComponentFixture<MyCustomPageWithIdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyCustomPageWithIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
