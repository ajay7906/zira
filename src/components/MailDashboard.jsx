



// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Separator } from "@/components/ui/separator";
// import { Avatar } from "@/components/ui/avatar";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Mail,
//   Inbox,
//   Send,
//   File,
//   Trash,
//   Star,
//   Search,
//   Plus,
//   MoreVertical,
//   Archive,
//   Tags,
//   Flag,
//   UserCircle,
//   Settings,
//   ChevronDown,
//   Edit3
// } from 'lucide-react';

// const mockEmails = [
//   {
//     id: 1,
//     subject: 'Your Amazon order has shipped!',
//     sender: 'ship-confirm@amazon.com',
//     senderName: 'Amazon',
//     timestamp: '10:30 AM',
//     content: 'Your recent order (#123-456789) has shipped. Track your package...',
//     isStarred: true,
//     isRead: false,
//     labels: ['orders'],
//     folder: 'inbox',
//     avatar: '🛍️'
//   },
//   {
//     id: 2,
//     subject: 'Team Meeting Notes - Product Launch Discussion',
//     sender: 'sarah@company.com',
//     senderName: 'Sarah Johnson',
//     timestamp: 'Yesterday',
//     content: 'Hi team, Following up on our discussion about the Q2 product launch...',
//     isStarred: false,
//     isRead: true,
//     labels: ['work', 'important'],
//     folder: 'inbox',
//     avatar: 'SJ'
//   },
//   {
//     id: 3,
//     subject: 'Weekend Plans?',
//     sender: 'mike@gmail.com',
//     senderName: 'Mike Peters',
//     timestamp: 'Mar 12',
//     content: 'Hey! A bunch of us are planning to go hiking this weekend...',
//     isStarred: false,
//     isRead: true,
//     labels: ['personal'],
//     folder: 'inbox',
//     avatar: 'MP'
//   },
// ];

// const labels = [
//   { id: 1, name: 'work', color: 'bg-blue-500' },
//   { id: 2, name: 'personal', color: 'bg-green-500' },
//   { id: 3, name: 'important', color: 'bg-red-500' },
//   { id: 4, name: 'orders', color: 'bg-yellow-500' },
// ];

// const GmailDashboard = () => {
//   const [selectedMail, setSelectedMail] = useState(null);
//   const [currentFolder, setCurrentFolder] = useState('inbox');
//   const [composeOpen, setComposeOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [emails, setEmails] = useState(mockEmails);

//   const toggleStar = (emailId) => {
//     setEmails(emails.map(email => 
//       email.id === emailId 
//         ? { ...email, isStarred: !email.isStarred }
//         : email
//     ));
//   };

//   const markAsRead = (emailId) => {
//     setEmails(emails.map(email =>
//       email.id === emailId
//         ? { ...email, isRead: true }
//         : email
//     ));
//   };

//   const filteredEmails = emails.filter(email =>
//     email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     email.senderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     email.content.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const ComposeDialog = () => (
//     <Dialog open={composeOpen} onOpenChange={setComposeOpen}>
//       <DialogContent className="sm:max-w-[600px]">
//         <DialogHeader>
//           <DialogTitle>New Message</DialogTitle>
//         </DialogHeader>
//         <div className="space-y-4">
//           <Input placeholder="To" />
//           <Input placeholder="Subject" />
//           <textarea
//             className="w-full h-64 p-2 border rounded-md"
//             placeholder="Write your message here..."
//           />
//           <div className="flex justify-between">
//             <Button>Send</Button>
//             <Button variant="ghost" onClick={() => setComposeOpen(false)}>
//               Cancel
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );

//   return (
//     <div className="flex h-screen bg-white">
//       {/* Left Sidebar */}
//       <div className="w-64 border-r bg-gray-50 flex flex-col">
//         <div className="p-4">
//           <Button 
//             className="w-full justify-start bg-blue-100 hover:bg-blue-200 text-blue-700"
//             size="lg"
//             onClick={() => setComposeOpen(true)}
//           >
//             <Edit3 className="mr-2 h-4 w-4" />
//             Compose
//           </Button>
//         </div>

//         <ScrollArea className="flex-1">
//           <nav className="space-y-1 p-2">
//             <Button
//               variant={currentFolder === 'inbox' ? "secondary" : "ghost"}
//               className="w-full justify-start"
//               onClick={() => setCurrentFolder('inbox')}
//             >
//               <Inbox className="mr-2 h-4 w-4" />
//               Inbox
//               <span className="ml-auto bg-blue-100 text-blue-700 px-2 rounded-full">
//                 {emails.filter(e => !e.isRead).length}
//               </span>
//             </Button>
            
//             <Button
//               variant={currentFolder === 'starred' ? "secondary" : "ghost"}
//               className="w-full justify-start"
//               onClick={() => setCurrentFolder('starred')}
//             >
//               <Star className="mr-2 h-4 w-4" />
//               Starred
//             </Button>
            
//             <Button
//               variant={currentFolder === 'sent' ? "secondary" : "ghost"}
//               className="w-full justify-start"
//               onClick={() => setCurrentFolder('sent')}
//             >
//               <Send className="mr-2 h-4 w-4" />
//               Sent
//             </Button>

//             <Button
//               variant={currentFolder === 'drafts' ? "secondary" : "ghost"}
//               className="w-full justify-start"
//               onClick={() => setCurrentFolder('drafts')}
//             >
//               <File className="mr-2 h-4 w-4" />
//               Drafts
//             </Button>

//             <Separator className="my-4" />

//             <div className="px-3 py-2 text-sm font-semibold text-gray-500">
//               Labels
//             </div>

//             {labels.map(label => (
//               <Button
//                 key={label.id}
//                 variant="ghost"
//                 className="w-full justify-start"
//                 onClick={() => setCurrentFolder(`label-${label.name}`)}
//               >
//                 <div className={`w-3 h-3 rounded-full ${label.color} mr-2`} />
//                 {label.name}
//               </Button>
//             ))}
//           </nav>
//         </ScrollArea>

//         {/* User Profile */}
//         <div className="p-4 border-t">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="w-full justify-between">
//                 <div className="flex items-center">
//                   <Avatar className="h-6 w-6 mr-2">
//                     <UserCircle className="h-4 w-4" />
//                   </Avatar>
//                   <span>John Doe</span>
//                 </div>
//                 <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               <DropdownMenuItem>Profile</DropdownMenuItem>
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Sign Out</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>

//       {/* Email List */}
//       <div className="flex-1 flex flex-col">
//         <div className="p-4 border-b">
//           <div className="flex items-center space-x-2">
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//               <Input 
//                 placeholder="Search in emails" 
//                 className="pl-10"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//             <Button variant="ghost" size="icon">
//               <Settings className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>

//         <ScrollArea className="flex-1">
//           {filteredEmails
//             .filter(email => email.folder === currentFolder || email.folder.startsWith('label-'))
//             .map(email => (
//               <div
//                 key={email.id}
//                 className={`p-4 cursor-pointer hover:bg-gray-50 flex items-center ${
//                   selectedMail?.id === email.id ? 'bg-blue-50' : ''
//                 } ${!email.isRead ? 'font-semibold bg-gray-50' : ''}`}
//                 onClick={() => {
//                   setSelectedMail(email);
//                   markAsRead(email.id);
//                 }}
//               >
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="mr-2"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     toggleStar(email.id);
//                   }}
//                 >
//                   <Star
//                     className={`h-4 w-4 ${
//                       email.isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
//                     }`}
//                   />
//                 </Button>

//                 <Avatar className="h-8 w-8 mr-4">
//                   <div className="font-semibold text-sm">{email.avatar}</div>
//                 </Avatar>

//                 <div className="flex-1 min-w-0">
//                   <div className="flex justify-between">
//                     <span className="font-medium truncate">{email.senderName}</span>
//                     <span className="text-sm text-gray-500">{email.timestamp}</span>
//                   </div>
//                   <div className="text-sm truncate">{email.subject}</div>
//                   <div className="text-sm text-gray-500 truncate">{email.content}</div>
//                 </div>

//                 <div className="ml-4 flex items-center space-x-2">
//                   {email.labels.map(labelName => {
//                     const label = labels.find(l => l.name === labelName);
//                     return (
//                       <div
//                         key={labelName}
//                         className={`${label.color} text-white text-xs px-2 py-1 rounded`}
//                       >
//                         {labelName}
//                       </div>
//                     );
//                   })}
//                 </div>

//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       <MoreVertical className="h-4 w-4" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     <DropdownMenuItem>
//                       <Archive className="mr-2 h-4 w-4" />
//                       Archive
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                       <Trash className="mr-2 h-4 w-4" />
//                       Delete
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                       <Flag className="mr-2 h-4 w-4" />
//                       Flag
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                       <Tags className="mr-2 h-4 w-4" />
//                       Label as
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>
//             ))}
//         </ScrollArea>
//       </div>

//       {/* Email Detail */}
//       {selectedMail ? (
//         <div className="w-1/2 border-l flex flex-col">
//           <div className="p-4 border-b flex items-center justify-between">
//             <h2 className="text-xl font-bold">{selectedMail.subject}</h2>
//             <div className="flex space-x-2">
//               <Button variant="ghost" size="icon">
//                 <Archive className="h-4 w-4" />
//               </Button>
//               <Button variant="ghost" size="icon">
//                 <Trash className="h-4 w-4" />
//               </Button>
//               <Button variant="ghost" size="icon">
//                 <MoreVertical className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
          
//           <div className="p-4">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <Avatar className="h-10 w-10 mr-4">
//                   <div className="font-semibold">{selectedMail.avatar}</div>
//                 </Avatar>
//                 <div>
//                   <div className="font-medium">{selectedMail.senderName}</div>
//                   <div className="text-sm text-gray-500">{selectedMail.sender}</div>
//                 </div>
//               </div>
//               <div className="text-sm text-gray-500">{selectedMail.timestamp}</div>
//             </div>
            
//             <div className="prose max-w-none">
//               {selectedMail.content}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="w-1/2 border-l p-4 flex items-center justify-center text-gray-500">
//           Select an email to read
//         </div>
//       )}

//       <ComposeDialog />
//     </div>
//   );
// };

// export default GmailDashboard;



























































































































import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Mail,
  Inbox,
  Send,
  File,
  Trash,
  Star,
  Search,
  Plus,
  MoreVertical,
  Archive,
  Tags,
  Flag,
  UserCircle,
  Settings,
  ChevronDown,
  Edit3,
  Menu
} from 'lucide-react';

const mockEmails = [
  // Inbox emails
  {
    id: 1,
    subject: 'Your Amazon order has shipped!',
    sender: 'ship-confirm@amazon.com',
    senderName: 'Amazon',
    timestamp: '10:30 AM',
    content: 'Your recent order (#123-456789) has shipped. Track your package...',
    isStarred: true,
    isRead: false,
    labels: ['orders'],
    folder: 'inbox',
    avatar: '🛍️'
  },
  // Starred emails
  {
    id: 2,
    subject: 'Important Project Update',
    sender: 'boss@company.com',
    senderName: 'John Boss',
    timestamp: 'Yesterday',
    content: 'Team, here are the latest updates on our Q2 objectives...',
    isStarred: true,
    isRead: true,
    labels: ['work'],
    folder: 'inbox',
    avatar: 'JB'
  },
  // Sent emails
  {
    id: 3,
    subject: 'Re: Meeting Schedule',
    sender: 'me@company.com',
    senderName: 'Me',
    timestamp: '2:30 PM',
    content: 'Yes, I can attend the meeting at 3 PM tomorrow...',
    isStarred: false,
    isRead: true,
    labels: ['work'],
    folder: 'sent',
    avatar: 'ME'
  },
  // Draft emails
  {
    id: 4,
    subject: 'Draft: Project Proposal',
    sender: 'me@company.com',
    senderName: 'Me',
    timestamp: '1:15 PM',
    content: 'Here is the initial draft of the project proposal...',
    isStarred: false,
    isRead: true,
    labels: [],
    folder: 'drafts',
    avatar: 'ME'
  }
];

const labels = [
  { id: 1, name: 'work', color: 'bg-blue-500' },
  { id: 2, name: 'personal', color: 'bg-green-500' },
  { id: 3, name: 'important', color: 'bg-red-500' },
  { id: 4, name: 'orders', color: 'bg-yellow-500' },
];

const GmailDashboard = () => {
  const [selectedMail, setSelectedMail] = useState(null);
  const [currentFolder, setCurrentFolder] = useState('inbox');
  const [composeOpen, setComposeOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [emails, setEmails] = useState(mockEmails);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleStar = (emailId) => {
    setEmails(emails.map(email => 
      email.id === emailId 
        ? { ...email, isStarred: !email.isStarred }
        : email
    ));
  };

  const markAsRead = (emailId) => {
    setEmails(emails.map(email =>
      email.id === emailId
        ? { ...email, isRead: true }
        : email
    ));
  };

  const getFilteredEmails = () => {
    let filtered = emails;

    // Filter by folder
    if (currentFolder === 'starred') {
      filtered = emails.filter(email => email.isStarred);
    } else if (currentFolder === 'sent') {
      filtered = emails.filter(email => email.folder === 'sent');
    } else if (currentFolder === 'drafts') {
      filtered = emails.filter(email => email.folder === 'drafts');
    } else if (currentFolder.startsWith('label-')) {
      const labelName = currentFolder.replace('label-', '');
      filtered = emails.filter(email => email.labels.includes(labelName));
    } else {
      filtered = emails.filter(email => email.folder === 'inbox');
    }

    // Apply search filter
    return filtered.filter(email =>
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.senderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const ComposeDialog = () => (
    <Dialog open={composeOpen} onOpenChange={setComposeOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>New Message</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="To" />
          <Input placeholder="Subject" />
          <textarea
            className="w-full h-64 p-2 border rounded-md"
            placeholder="Write your message here..."
          />
          <div className="flex justify-between">
            <Button>Send</Button>
            <Button variant="ghost" onClick={() => setComposeOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const Sidebar = () => (
    <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-64 border-r bg-gray-50 flex flex-col h-full`}>
      <div className="p-4">
        <Button 
          className="w-full justify-start bg-blue-100 hover:bg-blue-200 text-blue-700"
          size="lg"
          onClick={() => setComposeOpen(true)}
        >
          <Edit3 className="mr-2 h-4 w-4" />
          Compose
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <nav className="space-y-1 p-2">
          <Button
            variant={currentFolder === 'inbox' ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setCurrentFolder('inbox')}
          >
            <Inbox className="mr-2 h-4 w-4" />
            Inbox
            <span className="ml-auto bg-blue-100 text-blue-700 px-2 rounded-full">
              {emails.filter(e => !e.isRead).length}
            </span>
          </Button>
          
          <Button
            variant={currentFolder === 'starred' ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setCurrentFolder('starred')}
          >
            <Star className="mr-2 h-4 w-4" />
            Starred
          </Button>
          
          <Button
            variant={currentFolder === 'sent' ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setCurrentFolder('sent')}
          >
            <Send className="mr-2 h-4 w-4" />
            Sent
          </Button>

          <Button
            variant={currentFolder === 'drafts' ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setCurrentFolder('drafts')}
          >
            <File className="mr-2 h-4 w-4" />
            Drafts
          </Button>

          <Separator className="my-4" />

          <div className="px-3 py-2 text-sm font-semibold text-gray-500">
            Labels
          </div>

          {labels.map(label => (
            <Button
              key={label.id}
              variant={currentFolder === `label-${label.name}` ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setCurrentFolder(`label-${label.name}`)}
            >
              <div className={`w-3 h-3 rounded-full ${label.color} mr-2`} />
              {label.name}
            </Button>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-between">
              <div className="flex items-center">
                <Avatar className="h-6 w-6 mr-2">
                  <UserCircle className="h-4 w-4" />
                </Avatar>
                <span>John Doe</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden absolute top-4 left-4 z-50"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search in emails" 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-1 min-h-0">
          {/* Email List */}
          <div className={`${selectedMail && !isMobile ? 'w-1/2' : 'w-full'} flex flex-col min-w-0 border-r`}>
            <ScrollArea className="flex-1">
              {getFilteredEmails().map(email => (
                <div
                  key={email.id}
                  className={`p-4 cursor-pointer hover:bg-gray-50 flex items-center ${
                    selectedMail?.id === email.id ? 'bg-blue-50' : ''
                  } ${!email.isRead ? 'font-semibold bg-gray-50' : ''}`}
                  onClick={() => {
                    setSelectedMail(email);
                    markAsRead(email.id);
                    if (isMobile) setSidebarOpen(false);
                  }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mr-2 shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStar(email.id);
                    }}
                  >
                    <Star
                      className={`h-4 w-4 ${
                        email.isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                      }`}
                    />
                  </Button>

                  <Avatar className="h-8 w-8 mr-4 shrink-0">
                    <div className="font-semibold text-sm">{email.avatar}</div>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <span className="font-medium truncate">{email.senderName}</span>
                      <span className="text-sm text-gray-500 shrink-0 ml-2">{email.timestamp}</span>
                    </div>
                    <div className="text-sm truncate">{email.subject}</div>
                    <div className="text-sm text-gray-500 truncate">{email.content}</div>
                  </div>

                  <div className="ml-4 hidden sm:flex items-center space-x-2">
                    {email.labels.map(labelName => {
                      const label = labels.find(l => l.name === labelName);
                      return (
                        <div
                          key={labelName}
                          className={`${label.color} text-white text-xs px-2 py-1 rounded`}
                        >
                          {labelName}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>

          {/* Email Detail */}
          {selectedMail && (
            <div className={`${isMobile ? 'fixed inset-0 z-50 bg-white' : 'w-1/2'} flex flex-col`}>
              <div className="p-4 border-b flex items-center justify-between">
                {isMobile && (
                  <Button variant="ghost" size="icon" onClick={() => setSelectedMail(null)}>
                    <ChevronDown className="h-4 w-4 rotate-90" />
                  </Button>
                )}
                <h2 className="text-xl font-bold truncate">{selectedMail.subject}</h2>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Archive className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <ScrollArea className="flex-1">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-4">
                        <div className="font-semibold">{selectedMail.avatar}</div>
                      </Avatar>
                      <div>
                        <div className="font-medium">{selectedMail.senderName}</div>
                        <div className="text-sm text-gray-500">{selectedMail.sender}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{selectedMail.timestamp}</div>
                  </div>
                  
                  <div className="prose max-w-none">
                    {selectedMail.content}
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedMail.labels.map(labelName => {
                      const label = labels.find(l => l.name === labelName);
                      return (
                        <div
                          key={labelName}
                          className={`${label.color} text-white text-xs px-2 py-1 rounded`}
                        >
                          {labelName}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-6 border-t pt-4">
                    <Button variant="outline" className="mr-2">
                      <Send className="h-4 w-4 mr-2" />
                      Reply
                    </Button>
                    <Button variant="outline">
                      <Send className="h-4 w-4 mr-2 rotate-45" />
                      Forward
                    </Button>
                  </div>
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
      </div>

      <ComposeDialog />
    </div>
  );
};

export default GmailDashboard;
