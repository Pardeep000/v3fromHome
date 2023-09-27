const useGetHeaderText = (location: string) => {
  let heading;
  let text;
  switch (location) {
    case "/dashboard":
      heading = "Dashboard";
      text = "Check your stats and suggestions for using Kuikwit.";
      break;
    case "/chats":
      heading = "Chats";
      text = "See chats with customers, managers, agents and more.";
      break;
    case "/users":
      heading = "Users";
      text = "See chats with customers, managers, agents and more.";
      break;
    case "/reports":
      heading = "Reports";
      text = "See chats with customers, managers, agents and more.";
      break;
    case "/settings/website":
      heading = "Website";
      text = "See chats with customers, managers, agents and more.";
      break;
    case "/settings/facebook":
      heading = "Facebook";
      text = "See chats with customers, managers, agents and more.";
      break;
    case "/settings/chatpage":
      heading = "Chat Page";
      text = "See chats with customers, managers, agents and more.";
      break;
    case "/settings/cannedResponse":
      heading = "Canned Response";
      text = "See chats with customers, managers, agents and more.";
      break;
    case "/settings/label":
      heading = "Labels";
      text = "See chats with customers, managers, agents and more.";
      break;
    case "/settings/notification":
      heading = "Notification";
      text = "See chats with customers, managers, agents and more.";
      break;
    case "/settings/twilio":
      heading = "Twilio";
      text = "See chats with customers, managers, agents and more.";
      break;
    default:
      heading = "Twilio";
      text = "See chats with customers, managers, agents and more.";
      break;
  }
  return { heading, text };
};

export default useGetHeaderText;
