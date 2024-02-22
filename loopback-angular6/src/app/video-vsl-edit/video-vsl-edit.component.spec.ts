import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoVslEditComponent } from './video-vsl-edit.component';

describe('VideoVslEditComponent', () => {
	let component: VideoVslEditComponent;
	let fixture: ComponentFixture<VideoVslEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ VideoVslEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VideoVslEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
