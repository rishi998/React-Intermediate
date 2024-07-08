// #include <iostream>
// using namespace std;
// void printeven(int arr[], int i, int n)
// {
//   if (i == n)
//   {
//     return;
//   }
//   if (arr[i] % 2 == 0)
//   {
//     cout << arr[i] << " ";
//   }
//   printeven(arr, i + 1, n);
// }

// int binarysearchrecursive(int arr[], int n, int s, int e, int target)
// {
//   if (s > e)
//   {
//     return -1;
//   }
//   int mid = s + (e - s) / 2;
//   if (arr[mid] == target)
//   {
//     return mid;
//   }
//   else if (target < arr[mid])
//   {
//     return binarysearchrecursive(arr, n, s, mid - 1, target);
//   }
//   else
//   {
//     return binarysearchrecursive(arr, n, mid + 1, e, target);
//   }
// }

// int main()
// {
//   int n = 10;
//   int arr[n] = {10, 34, 45, 51, 58, 59, 95, 103, 113, 150};
//   // printeven(arr, 0, n);
//   int s = 0;
//   int e = n - 1;
//   int target = 10;
//   cout << binarysearchrecursive(arr, n, s, e, target);
// }

#include <iostream>
using namespace std;
void printdigits(int n)
{
  if (n == 0)
  {
    return;
  }
  printdigits(n / 10);
  cout << n % 10 << endl;
}

int main()
{
  int n = 24719405;
  printdigits(n);
}