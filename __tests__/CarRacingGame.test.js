import CarRacingGame from "../src/CarRacingGame";
import { SETTING } from "../src/constants/setting";

describe("CarRacingGame", () => {
	let carRacingGame;
	let store;
	beforeEach(() => {
		store = {
			getState: jest.fn(() => ({
				carNames: [
					{ name: "a", position: 1 },
					{ name: "b", position: 1 },
					{ name: "c", position: 1 },
				],
			})),
			dispatch: jest.fn(),
		};

		carRacingGame = new CarRacingGame(store);
	});

	it("경기가 5번 진행되면 게임이 끝나야 합니다.", () => {
		carRacingGame.endGame = jest.fn();
		for (let i = 0; i < SETTING.CAR_RACING_GAME_SETTING.ROUND_END; i++) {
			carRacingGame.increaseRound();
		}
		expect(carRacingGame.endGame).toBeCalled();
	});

	it("게임 1회 진행시 자동차의 상태를 보여줘야합니다.", () => {
		// Given
		// When
		// Then
	});

	it("게임이 끝나면 우승자를 알려줘야 합니다.", () => {
		// Given
		// When
	});

	it("게임이 끝나면 우승자를 알려줘야 합니다.(중복 우승자)", () => {});
});
