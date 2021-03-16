import { isValidEmail, isValidPassword } from './forms';

describe('forms', () => {
	describe('isValidEmail', () => {
		it('email should be correct - positive case #1', () => {
			const email = 'foo@google.com';
			expect(isValidEmail(email)).toEqual(true);
		});

		it('email should be correct - positive case #2', () => {
			const email = 'my.super.email@wp.pl';
			expect(isValidEmail(email)).toEqual(true);
		});

		it('email should be incorrect - negative case #1', () => {
			const email = 'ThisIsNotCorrectEmail';
			expect(isValidEmail(email)).toEqual(false);
		});

		it('email should be incorrect - negative case #2', () => {
			const email = 'foo_f.o.o.com';
			expect(isValidEmail(email)).toEqual(false);
		});
	});

	describe('isValidPassword', () => {
		it('password should be correct - positive case #1', () => {
			const password = 'MySuperLongPassword123';
			expect(isValidPassword(password)).toEqual(true);
		});

		it('password should be correct - positive case #2', () => {
			const password = 'S3Cr3tPassword1';
			expect(isValidPassword(password)).toEqual(true);
		});

		it('password should be correct - positive case #3', () => {
			const password = 'Password123';
			expect(isValidPassword(password)).toEqual(true);
		});

		it('password should be incorrect - negative case #1', () => {
			const password = 'passwrd';
			expect(isValidPassword(password)).toEqual(false);
		});
	});
});
