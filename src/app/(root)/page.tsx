import HeaderBox from "@/components/header-box";
import RecentTransactions from "@/components/recent-transactions";
import RightSidebar from "@/components/right-sidebar";
import TotalBalanceBox from "@/components/total-balance-box";
import { banks, testAccounts, testTransactions, testUser } from "@/lib/\bdata";
import React from "react";

const Home = ({ searchParams: { id, page }}: SearchParamProps) => {
    const currentPage = Number(page as string) || 1;
    const loggedIn = { firstName: 'Adrian' };
    const appwriteItemId = (id as string) || testAccounts[0]?.appwriteItemId;
    
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={testAccounts}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                <RecentTransactions 
                    accounts={testAccounts}
                    transactions={testTransactions}
                    appwriteItemId={appwriteItemId}
                    page={currentPage}
                />
            </div>

            <RightSidebar
                user={testUser}
                transactions={testTransactions}
                banks={banks.slice(0, 2)}
            />
        </section>
    )
}

export default Home;