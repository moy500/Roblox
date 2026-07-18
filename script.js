const button = document.getElementById('ctaBtn');
const today = document.getElementById('today');
const joinButton = document.getElementById('joinBtn');
const usernameInput = document.getElementById('usernameInput');
const joinMessage = document.getElementById('joinMessage');

if (button) {
  button.addEventListener('click', () => {
    button.textContent = 'Welcome aboard!';
  });
}

if (joinButton && usernameInput && joinMessage) {
  joinButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();

    if (!username) {
      joinMessage.textContent = 'Please enter a Roblox username first.';
      return;
    }

    joinMessage.textContent = `Thanks, ${username}! Your invite is on the way.`;
    usernameInput.value = '';
  });
}

if (today) {
  const date = new Date();
  today.textContent = `Today is ${date.toDateString()}`;
}
