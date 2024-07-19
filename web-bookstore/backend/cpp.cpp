#include <iostream>
using namespace std;
class Node
{
public:
  int data;
  Node *next;

  Node(int value)
  {
    this->data = value;
    this->next = NULL;
  }
};

Node *insertathead(int value, Node *&head, Node *&tail)
{
  // LL is emepty
  // create a head node
  if (head == NULL && tail == NULL)
  {
    Node *newnode = new Node(value);
    head = newnode;
    tail = newnode;
  }
  else
  {
    Node *newnode = new Node(value);
    newnode->next = head;
    head = newnode;
  }
  return head;
}
void insertatposition(Node *&head, int value, int index)
{
  Node *temp = head;
  Node *newnode = new Node(value);
  if (index == 0)
  {
    newnode->next = head;
    head = newnode;
  }
  int i = 0;
  while (i < index - 1)
  {
    temp = temp->next;
    i++;
  }
  newnode->next = temp->next;
  temp->next = newnode;
}
Node *insertatend(int value, Node *&head, Node *&tail)
{
  if (head == NULL && tail == NULL)
  {
    Node *newnode = new Node(value);
    head = newnode;
    tail = newnode;
  }
  else
  {
    Node *newnode = new Node(value);
    tail->next = newnode;
    newnode->next = NULL;
    tail = newnode;
  }
  return tail;
}

void printll(Node *head)
{
  Node *temp = head;
  while (temp != NULL)
  {
    cout << temp->data << "->";
    temp = temp->next;
  }
  cout << "NULL";
}

void deletenode(int value, Node *head, Node *tail)
{
  if (head == NULL && tail == NULL)
  {
    cout << "No node to delete!!";
    return;
  }
  // single node in ll
  if (head == tail)
  {
    Node *temp = head;
    head = NULL;
    tail = NULL;
    delete temp;
    return;
  }
  else
  {
    // multiple nodes
    Node *p = head;
    Node *q = head->next;
    while (q->data != value)
    {
      p = p->next;
      q = q->next;
    }
    p->next = q->next;
    q->next = NULL;
    delete q;
    return;
  }
}
bool searchll(Node *head, int value)
{
  Node *temp = head;
  while (temp != NULL)
  {
    if (temp->data == value)
    {
      return true;
    }
    temp = temp->next;
  }
  return false;
}

int main()
{
  Node *head = NULL;
  Node *tail = NULL;

  insertathead(10, head, tail);
  insertathead(20, head, tail);
  insertathead(30, head, tail);
  insertatend(5, head, tail);
  insertatend(4, head, tail);
  insertatend(3, head, tail);
  insertatposition(head, 35, 5);
  // deletenode(5, head, tail);
  deletenode(35, head, tail);
  // if (searchll(head, 10))
  // {
  //   cout << "present" << endl;
  // }
  // else
  // {
  //   cout << "No" << endl;
  // }
  printll(head);
}