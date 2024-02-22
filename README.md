# Playwright and Artillery Load Testing Project

## Overview

This project combines the power of [Playwright](https://playwright.dev/) and [Artillery](https://artillery.io/) to provide a robust and versatile solution for load testing various applications. Playwright is used for browser automation, enabling realistic user interactions, while Artillery focuses on generating and managing the load.

## Features

- **Realistic User Scenarios**: Leverage Playwright to simulate real user interactions with your application, including complex user flows, form submissions, and more.

- **Browser Compatibility**: Test your application's performance across different browsers, as Playwright supports multiple browser engines, including Chromium, WebKit, and Firefox.

- **Scalable Load Generation**: Artillery allows you to easily scale up the number of virtual users, enabling you to simulate various levels of traffic and identify performance bottlenecks.

- **Customizable Load Profiles**: Define custom load profiles to simulate different user behaviors, such as peak hours, gradual ramp-ups, or sudden spikes in traffic.

- **Data-Driven Testing**: Use external data sources to drive your tests dynamically, allowing for more realistic scenarios and increased variability in user interactions.

## Getting Started

### Prerequisites

- Node.js: Ensure that Node.js is installed on your machine. You can download it from [here](https://nodejs.org/).

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/playwright-artillery-load-test.git
   ```

2. Install dependencies:

   ```bash
   cd playwright-artillery-load-test
   npm install
   ```

### Running Tests

1. Define your Playwright scripts in the `tests` directory.

2. Configure your Artillery load test scenarios in the `artillery-config` directory.

3. Run your tests:

   ```bash
   npm run test
   ```
4. Run Load test:

   ```bash
   npm run load-test-<projectname>
   ```


## Contribution Guidelines

We welcome contributions! If you want to improve this project or add new features, please follow the guidelines outlined in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.