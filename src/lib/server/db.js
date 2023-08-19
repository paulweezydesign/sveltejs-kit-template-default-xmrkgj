import { faker } from '@faker-js/faker';

export const STUDENTS = Array.from({ length: 30 }, (_, index) => ({
	id: index.toString(),
	image: faker.image.cats(),

	name: `${faker.name.firstName()} ${faker.name.lastName()}`,
	info: faker.lorem.paragraph()
}));
