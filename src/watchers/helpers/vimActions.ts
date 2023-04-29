export enum VIM_ACTIONS {
  EXPAND_PHOTO = 'expand_photo',
  LIKE = 'like',
  LOAD_NEW_POSTS = 'load_new_posts',
  MUTE_ACCOUNT = 'mute_account',
  NEW_POST = 'new_post',
  NEXT_POST = 'next_post',
  OPEN_POST = 'open_post',
  PREVIOUS_POST = 'previous_post',
  REPLY = 'reply',
  REPOST = 'repost',
  SEARCH = 'search',
  SHOW_HELP = 'show_help'
}

export const VIM_KEY_MAP = {
  '?': VIM_ACTIONS.SHOW_HELP,
  '/': VIM_ACTIONS.SEARCH,
  '.': VIM_ACTIONS.LOAD_NEW_POSTS,
  'j': VIM_ACTIONS.NEXT_POST,
  'k': VIM_ACTIONS.PREVIOUS_POST,
  'l': VIM_ACTIONS.LIKE,
  'n': VIM_ACTIONS.NEW_POST,
  'o': VIM_ACTIONS.EXPAND_PHOTO,
  'r': VIM_ACTIONS.REPLY,
  't': VIM_ACTIONS.REPOST,
  'u': VIM_ACTIONS.MUTE_ACCOUNT,
  'ArrowDown': VIM_ACTIONS.NEXT_POST,
  'ArrowUp': VIM_ACTIONS.PREVIOUS_POST,
  'Enter': VIM_ACTIONS.OPEN_POST
};

const toNormalText = (name: string): string => {
  name = name.replace(/_/g, ' ');
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const generateHelpMessage = (): string => {
  const actions: { [key: string]: string[] } = {};
  for (const [key, action] of Object.entries(VIM_KEY_MAP)) {
    if (!(action in actions)) actions[action] = [];
    actions[action].push(`<span class="mono">${key}</span>`);
  }

  const helpMessage = [];
  for (const [action, buttons] of Object.entries(actions)) {
    helpMessage.push(`<b>${toNormalText(action)}</b>: ${buttons.join('&nbsp;')}`);
  }

  return `
    <div class="bluesky-overhaul-help">
      <h3>Bluesky Overhaul Vim Keybindings</h3>
      <p>${helpMessage.join('<br/>')}</p>
    </div>
  `;
};
